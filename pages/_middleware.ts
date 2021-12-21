import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const ip = req.headers['host'];
    console.log(req.headers.get('host'))
    if(req.headers.get('x-forwarded-for')){
        return new Response('Auth required', {
            status: 403,
            statusText:'Forbidden'
          })
    }
  else{
    return NextResponse.next()
  }
}