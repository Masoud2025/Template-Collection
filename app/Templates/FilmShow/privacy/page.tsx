import ContentPage from "../components/ContentPage";

export default function PrivacyPage() {
  return (
    <ContentPage
      title="حریم خصوصی"
      description="تعهد فیلم‌بین به حفظ حریم خصوصی و امنیت اطلاعات شما"
    >
      <p>
        فیلم‌بین متعهد می‌شود اطلاعات شخصی کاربران را با رعایت بالاترین استانداردهای
        امنیتی جمع‌آوری و نگهداری کند. ما اطلاعات شما را بدون رضایت صریح به اشخاص
        ثالث واگذار نمی‌کنیم.
      </p>
      <h2 className="text-xl font-bold text-white">اطلاعاتی که جمع‌آوری می‌کنیم</h2>
      <ul className="list-disc space-y-2 pr-5">
        <li>اطلاعات حساب کاربری (ایمیل، نام کاربری)</li>
        <li>تاریخچه تماشا و علایق محتوایی</li>
        <li>داده‌های فنی دستگاه برای بهبود کیفیت پخش</li>
      </ul>
      <h2 className="text-xl font-bold text-white">حقوق شما</h2>
      <p>
        شما در هر زمان می‌توانید درخواست حذف حساب یا اصلاح اطلاعات خود را از طریق
        بخش تماس با ما ارسال کنید.
      </p>
    </ContentPage>
  );
}
