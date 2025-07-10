import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, to } = body;

    // 基本的なバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // メール送信の実装
    // 実際の実装では、SendGrid、Resend、Nodemailerなどのサービスを使用
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 管理者宛メール
    const adminMail = await resend.emails.send({
      from: 'noreply@buzz-force.com',
      to: 'suppsaudit@gmail.com', // テスト用
      subject: '【お問い合わせ】Webフォームから新規受付',
      html: `
        <p>新しいお問い合わせがありました。</p>
        <ul>
          <li><b>お名前:</b> ${name}</li>
          <li><b>メールアドレス:</b> ${email}</li>
          <li><b>会社名:</b> ${company || '-'} </li>
          <li><b>電話番号:</b> ${phone || '-'} </li>
          <li><b>お問い合わせ内容:</b><br/>${message.replace(/\n/g, '<br/>')}</li>
        </ul>
      `,
    });
    console.log("Resend送信結果（管理者宛）", adminMail);

    // ユーザー宛自動返信メール
    const userMail = await resend.emails.send({
      from: 'noreply@buzz-force.com',
      to: email,
      subject: '【バズラボ】お問合せ頂きありがとうございます。',
      html: `
        <p>${name} 様</p>
        <p>この度はお問い合わせいただき、誠にありがとうございます。<br/>
        内容を確認のうえ、担当者よりご連絡いたします。</p>
        <hr/>
        <p><b>お問い合わせ内容</b></p>
        <ul>
          <li><b>お名前:</b> ${name}</li>
          <li><b>メールアドレス:</b> ${email}</li>
          <li><b>会社名:</b> ${company || '-'} </li>
          <li><b>電話番号:</b> ${phone || '-'} </li>
          <li><b>お問い合わせ内容:</b><br/>${message.replace(/\n/g, '<br/>')}</li>
        </ul>
        <p>-------------------------<br/>バズラボ運営事務局</p>
      `,
    });
    console.log("Resend送信結果（ユーザー宛）", userMail);

    // 成功レスポンス
    return NextResponse.json(
      { message: "お問い合わせが正常に送信されました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("お問い合わせ送信エラー:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
} 