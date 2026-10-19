# SMTP remediation — 19 October 2026

The two legacy mail scripts contained SMTP passwords. Treat every exposed credential as compromised. No credential was tested; values are intentionally omitted.

## Before merging or deploying

1. Identify the mailbox credentials used by both scripts at the mail provider. Create replacement credentials, check provider access logs, and revoke every exposed credential. Coordinate activation and revocation with the actual hosting operator.
2. Configure SMTP_USERNAME and SMTP_PASSWORD in the hosting environment. SMTP_HOST, SMTP_PORT and SMTP_SECURE are optional and retain the existing transport defaults. PHP must receive the environment variables; this code does not automatically load a .env file. Keep secret files outside the document root.
3. In staging, verify normal contact submission using replacement credentials, including delivery and Reply-To. GET and malformed submissions must be rejected. No real email was sent during this audit.
4. Keep SMTP_TEST_ENABLED unset in production. The diagnostic mail.php endpoint is disabled by default. If temporarily enabled, restrict it at the web server and disable it immediately afterward.

The authenticated mailbox becomes the sender and the visitor is Reply-To. Visitor content is escaped before inclusion in the HTML body. SMTP debug output is disabled.

This PR requires the hosting configuration above before deployment. It does not rotate passwords, remove historical commits or upgrade bundled legacy PHPMailer/WordPress. Assess those upgrades separately with backups and staging tests. Add web-server rate limiting or a contact-form challenge before exposing the legacy handler to untrusted traffic.
