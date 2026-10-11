import { IssueList } from "@/components/IssueList";
import { issues } from "@/data/issue";

export default function IssuesPage() {
    return (
        <main>
            <h1>รายการปัญหา</h1>
            <IssueList issues={issues} />
        </main>
    )
}