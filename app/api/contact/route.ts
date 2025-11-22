import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // NOTE: This requires GMAIL_USER and GMAIL_PASS environment variables
    // GMAIL_PASS should be an App Password, not your regular password
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'arpan0325@gmail.com', // Updated destination email
      subject: `New Portfolio Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Only attempt to send if credentials are present
    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
    } else {
      // Fallback for demo purposes if no env vars
      console.log('Email would be sent to arpan0325@gmail.com:', { name, email, message })
      return NextResponse.json(
        { message: 'Message received! (Configure env vars to send real email)' },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
