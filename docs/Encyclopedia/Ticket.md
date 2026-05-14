---
title: Enable Secure and Effective Permissions in Windows
type: encyclopedia
tags: [windows, NTFS, permissions, EFS, file-system, security]
sources: [CompTIA A+]
---
# Ticket

In information technology, a **ticket** is a formal record created to document, track, and manage a unit of work — most commonly a technical problem, service request, or project task — from the moment it is reported through to its resolution. Tickets are the foundational unit of IT support and project management workflows, giving teams a structured, persistent log of what needs to be done, who is doing it, and what has already been tried.

## Purpose

Tickets serve several overlapping functions within an IT organization:

- **Documentation** — They capture the user's report, technician observations, error messages, diagnostic steps, and outcomes in one place, so nothing is lost between shifts or handoffs.
- **Tracking** — A ticket's status (open, in progress, resolved, closed) gives everyone visibility into where work stands without needing to ask.
- **Pattern recognition** — When tickets are reviewed in aggregate, recurring issues become visible. This allows IT teams to identify systemic problems rather than treating every incident as isolated.
- **Accountability and transparency** — Assigning a ticket to a specific technician creates a clear chain of responsibility and provides an audit trail for management.

## What a Good Ticket Contains

A well-written ticket gives any technician enough context to continue the work without starting from scratch. At minimum it should include:

- A clear description of the issue in the user's own words
- The technician's observations and the diagnostic steps already taken
- Any error messages, with timestamps and screenshots where available
- A record of what has already been ruled out or attempted

## Tickets in IT Platforms

Modern IT platforms use ticketing as their primary unit of work. In tools like Jira, tickets (referred to as *work items*) can represent a wide range of work types beyond helpdesk issues, including project tasks, feature requests, software bugs, and user stories. These platforms extend the basic ticket concept with structured fields such as assignee, due date, priority, labels, and attachments, as well as hierarchical relationships between tickets.

### Common Ticket (Work Item) Types

| Type | Description |
|---|---|
| **Epic** | A large body of work that groups multiple related tickets under a single goal |
| **Story** | A requirement or deliverable expressed from the user's perspective |
| **Task** | A discrete unit of work that does not fit neatly into another category |
| **Bug** | A problem or defect that needs to be investigated and fixed |
| **Sub-task** | A smaller, more granular step required to complete a parent ticket |

### Ticket Relationships

Tickets can be linked to one another to represent dependencies and associations. Common link types include:

- **Blocks / is blocked by** — One ticket cannot proceed until another is resolved
- **Clones / is cloned by** — A ticket is a copy of another
- **Duplicates / is duplicated by** — Two tickets describe the same issue
- **Relates to** — A general association without a specific dependency

These relationships make it easier for teams to navigate connected work and surface hidden dependencies before they become bottlenecks.

## See Also

- Help Desk
- Incident Management
- IT Service Management (ITSM)

---

## Sources

- Atlassian. "Introduction to Jira Work Items." *Atlassian.* https://www.atlassian.com/software/jira/guides/issues/overview
- Walker. *CompTIA A+ Core 1 (220-1101) and Core 2 (220-1102).* Internal knowledge base reference.

