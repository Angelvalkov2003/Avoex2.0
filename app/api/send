import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ 
            message: 'Error: RESEND_API_KEY is not set in environment variables' 
        }, { status: 500 });
    }

    try {
        const body = await request.json();
        const { email, serviceType, budget, description } = body;

        // Validation
        if (!email || !serviceType || !description) {
            return NextResponse.json({ 
                message: 'Error: Missing required fields' 
            }, { status: 400 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        
        // Map service type to readable names
        const serviceTypeMap: { [key: string]: string } = {
            'static': 'Static Website',
            'booking': 'Booking Site',
            'ecommerce': 'E-commerce',
            'management': 'Management Software',
            'automations': 'Automations',
            'ads': 'Social Media Ads',
            'design': 'Custom Banners & Posts',
            'seo': 'SEO'
        };
        
        const serviceTypeDisplay = serviceTypeMap[serviceType] || serviceType;
        
        // Format HTML email
        const htmlContent = `
            <h2>New Inquiry from Contact Form</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Type:</strong> ${serviceTypeDisplay}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Description:</strong></p>
            <p>${description.replace(/\n/g, '<br>')}</p>
        `;

        const { data, error } = await resend.emails.send({
            from: 'avoex@resend.dev',
            to: 'avoex.contact@gmail.com',
            subject: 'New Inquiry from Avoex Contact Form',
            html: htmlContent,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ 
                message: 'Error sending email', 
                error: error 
            }, { status: 500 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({ 
            message: 'Email sent successfully', 
            emailId: data?.id 
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ 
            message: 'Error', 
            error: error instanceof Error ? error.message : String(error) 
        }, { status: 500 });
    }
}

// Задържаме GET за тестване
export async function GET() {
    return NextResponse.json({ message: 'Use POST to send contact form data' });
}

