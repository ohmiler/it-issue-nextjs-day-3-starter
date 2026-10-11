import type { IssueStatus } from "@/types/issue";

function getStatusClass(status: IssueStatus): string {
    if (status === "OPEN") {
        return "status-open";
    }

    if (status === "IN_PROGRESS") {
        return "status-progress";
    }

    return "status-done";
}

type StatusBadgeProps = {
    status: IssueStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span className={`status ${getStatusClass(status)}`}>
            {status}
        </span>
    )
}