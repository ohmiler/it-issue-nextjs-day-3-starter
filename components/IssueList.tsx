import { StatusBadge } from "./StatusBadge";
import type { Issue } from "@/types/issue";
import Link from "next/link";

type IssueListProps = {
    issues: Issue[];
}

export function IssueList({ issues }: IssueListProps) {
    return (
        <section className="issue-list" aria-labelledby="issue-list-title">
            <h2 id="issue-list-title">รายการปัญหาล่าสุด</h2>
            <p>ตัวอย่างรายการปัญหาที่ถูกแจ้งเข้ามาในระบบ</p>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>รหัส</th>
                            <th>หัวข้อ</th>
                            <th>ผู้แจ้ง</th>
                            <th>สถานะ</th>
                            <th>รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue) => (
                            <tr key={issue.id}>
                                <td>#{issue.id}</td>
                                <td>{issue.title}</td>
                                <td>{issue.reporterName}</td>
                                <td><StatusBadge status={issue.status} /></td>
                                <td><Link href={`/issues/${issue.id}`}>ดูรายละเอียด</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}