import { IssueForm } from "@/components/IssueForm";
import { IssueList } from "@/components/IssueList";
import { issues } from "@/data/issue"

export default function Home() {
  return (
    <>
      <header>
        <h1>ระบบแจ้งปัญหา ​IT</h1>
        <p>แจ้งและติดตามปัญหาการใช้งานระบบภายใน</p>
      </header>

      <main>
        <IssueForm />
        <IssueList issues={issues} />
      </main>

      <footer>
        <p>ฝ่ายเทคโนโลยีสารสนเทศ</p>
      </footer>
    </>
  );
}
