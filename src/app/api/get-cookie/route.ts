import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Call the NestJS backend to get the cookie value
    // The cookies from the frontend request will be automatically forwarded
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-cookie`, {
      method: 'GET',
      credentials: 'include',
      // Forward the cookie header from the incoming request
      headers: {
        'Content-Type': 'application/json',
        Cookie: request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get cookie from backend');
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error getting cookie:', error);
    return NextResponse.json({ error: 'Failed to get cookie' }, { status: 500 });
  }
} 