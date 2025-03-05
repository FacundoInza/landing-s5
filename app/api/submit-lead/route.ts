import { NextResponse } from 'next/server'

// URL del webhook de n8n
const webhookUrl = process.env.N8N_WEBHOOK_URL || ''

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Enviar datos al webhook de n8n
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (!response.ok) {
      throw new Error('Error al enviar datos al webhook')
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { success: false, error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
} 