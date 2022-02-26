# github-action-asana-ticket
Scripts to trigger asana tickets when issues are opened in a github repo

## Setup

1) Setup an asana personal-access-token.
2) Place the personal-access-token into github secrets as `ASANA_SECRET`
3) Use the [asana api explorer](https://developers.asana.com/explorer) to identify the target project and section gid.
    a) In github secrets, set `ASANA_PROJECT` to the project gid.
    b) In github secrets, set `ASANA_SECTION` to the section gid.
