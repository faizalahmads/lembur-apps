import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Import PrismaClient langsung (tidak pakai path alias)
import { PrismaClient } from '@prisma/client'

// Helper untuk sign token (buat dulu)
import { signToken } from "./jwt-helper.js";

export async function POST(request) {
  let prisma;
  
  try {
    // Buat instance Prisma
    prisma = new PrismaClient();
    
    // Parse request body
    const body = await request.json();
    const { username, password } = body;

    console.log("Login attempt for:", username);

    // Validasi input
    if (!username || !password) {
      return NextResponse.json({ 
        success: false,
        message: "Username dan password diperlukan" 
      }, { status: 400 });
    }

    // Cari user di database
    const user = await prisma.user.findUnique({ 
      where: { 
        username: username.trim().toLowerCase() 
      } 
    });

    // Jika user tidak ditemukan
    if (!user) {
      return NextResponse.json({ 
        success: false,
        message: "User tidak ditemukan" 
      }, { status: 401 });
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return NextResponse.json({ 
        success: false,
        message: "Password salah" 
      }, { status: 401 });
    }

    // Generate JWT token
    const token = signToken({
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role
    });

    // Response sukses
    return NextResponse.json({
      success: true,
      message: "Login berhasil",
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
          role: user.role
        }
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    
    return NextResponse.json({
      success: false,
      message: "Terjadi kesalahan server",
      ...(process.env.NODE_ENV === 'development' && { 
        error: error.message 
      })
    }, { status: 500 });
    
  } finally {
    // Disconnect Prisma
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Login endpoint",
    description: "POST dengan {username, password} untuk login",
    example: {
      method: "POST",
      body: {
        username: "your_username",
        password: "your_password"
      }
    }
  });
}