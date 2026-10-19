# Security follow-up — 19 October 2026

The SMTP migration in this PR requires hosting configuration before deployment. The repository additionally bundles WordPress 5.1.1 and PHPMailer 5.1. Plan supported upgrades in staging with backups. about.html contains a browser-visible Google Maps key: verify application/API restrictions and billing at Google Cloud; public inclusion alone is not proof of a server-secret leak. Do not remove it blindly and break maps. Secret scanning will intentionally remain red for unresolved current-tree candidates until reviewed.

The new baseline scans the current checked-out tree, not historical commits. Do not interpret a green check as proof that historical credentials were revoked. No production deployment or provider credential test was performed.

Repository rulesets, required PR checks, secret scanning/push protection, Dependabot alerts, account 2FA, and token/SSH-key hygiene require verification in GitHub settings. These settings were not mutated by this PR. Apply required checks only after their first verified successful run, so existing deployments are not unexpectedly blocked.
