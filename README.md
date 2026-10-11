# IT Issue Tracker — Day 3 Starter

โปรเจคเริ่มต้นสำหรับเรียนวันที่ 3 สร้างด้วย [Next.js](https://nextjs.org) 16 (App Router) + TypeScript

ใครที่ไม่ได้ทำวันที่ 1–2 มา ใช้โปรเจคนี้เริ่มไปพร้อมกันได้เลย

## สิ่งที่ต้องมีในเครื่อง

- [Node.js](https://nodejs.org) เวอร์ชัน 20.9 ขึ้นไป (เช็คด้วย `node -v`)
- [Git](https://git-scm.com)
- บัญชี [GitHub](https://github.com)

## เริ่มต้นใช้งาน

### 1. สร้าง repo ของตัวเองจาก template

> ⚠️ **อย่า `git clone` repo นี้ตรงๆ** เพราะจะ push ไม่ได้ และวันที่ 4 จะ deploy ไม่ได้

1. กดปุ่มเขียว **Use this template** มุมขวาบนของหน้านี้
2. เลือก **Create a new repository**
3. ตั้งชื่อ repo ของตัวเอง แล้วกด **Create repository**

### 2. Clone repo ของตัวเองลงเครื่อง

```bash
git clone https://github.com/<username-ของตัวเอง>/<ชื่อ-repo>.git
cd <ชื่อ-repo>
```

### 3. ติดตั้งและรันโปรเจค

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## ระหว่างเรียน: บันทึกงานขึ้น GitHub

```bash
git add .
git commit -m "อธิบายสิ่งที่ทำ"
git push
```

## วันที่ 4: Deploy ขึ้น Vercel

1. เข้า [vercel.com](https://vercel.com) แล้ว **Continue with GitHub**
2. กด **Add New… → Project**
3. เลือก repo ของตัวเอง แล้วกด **Import**
4. ไม่ต้องตั้งค่าอะไรเพิ่ม กด **Deploy**

หลังจากนี้ทุกครั้งที่ `git push` ระบบจะ deploy เวอร์ชันใหม่ให้อัตโนมัติ

## ถ้าเผลอ clone repo ของอาจารย์มาแล้ว

ไม่ต้องลบทิ้ง ให้สร้าง repo เปล่าบน GitHub ([github.com/new](https://github.com/new)) โดย**ไม่ต้อง**ติ๊ก README แล้วรัน:

```bash
git remote set-url origin https://github.com/<username-ของตัวเอง>/<ชื่อ-repo>.git
git push -u origin main
```

## โครงสร้างโปรเจค

```
app/
  page.tsx            หน้าแรก
  issues/
    page.tsx          รายการ issue ทั้งหมด
    [id]/             รายละเอียด issue
    new/              สร้าง issue ใหม่
  not-found.tsx       หน้า 404
components/           คอมโพเนนต์ที่ใช้ซ้ำ
data/issue.ts         ข้อมูลตัวอย่าง
types/                TypeScript types
```
