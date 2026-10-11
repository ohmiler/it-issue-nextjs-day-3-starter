export function IssueForm() {
    return (
        <section>
            <h2>แจ้งปัญหาใหม่</h2>
            <form>
                <fieldset>
                    <legend>ข้อมูลปัญหา</legend>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="reporterName">ชื่อผู้แจ้ง</label>
                            <input id="reporterName" name="reporterName" type="text" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="reporterEmail">อีเมลผู้แจ้ง</label>
                            <input id="reporterEmail" name="reporterEmail" type="email" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">หัวข้อปัญหา</label>
                        <input id="title" name="title" type="text" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">รายละเอียดปัญหา</label>
                        <textarea name="description" id="description" rows={5} required></textarea>
                    </div>

                    <button type="submit">ส่งข้อมูล</button>
                </fieldset>
            </form>
        </section>
    )
}