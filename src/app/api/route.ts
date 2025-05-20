import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_9AwPSohJ_LZvxXgo3WFgFZBQnZibhgw51')

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const { name, email, message } = await request.json()

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['leonardo-programmer@proton.me'],
      subject: 'Contact from portfolio',
      html: `
        <h2>Contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
