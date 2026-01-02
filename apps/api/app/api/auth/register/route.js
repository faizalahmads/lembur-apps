import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// GANTI INI: import { prisma } from "@/lib/prisma";
// MENJADI: Buat PrismaClient langsung di file

import { PrismaClient } from '@prisma/client'

export async function POST(request) {
  let prisma;
  
  try {
    // Buat instance Prisma
    prisma = new PrismaClient();
    
    const body = await request.json();
    const { username, password, name } = body;

    console.log("Register attempt:", username);

    // Validasi
    if (!username || !password || !name) {
      return NextResponse.json({ 
        success: false,
        message: "Data tidak lengkap" 
      }, { status: 400 });
    }

    // Cek user existing
    const existingUser = await prisma.user.findUnique({
      where: { username: username.trim().toLowerCase() }
    });

    if (existingUser) {
      return NextResponse.json({ 
        success: false,
        message: "Username sudah digunakan" 
      }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        username: username.trim().toLowerCase(),
        password: hashedPassword,
        name: name.trim(),
        role: "driver"
      },
      select: {
        id: true,
        username: true,
        name: true,
        role: true,
        createdAt: true
      }
    });

    return NextResponse.json({
      success: true,
      message: "Registrasi berhasil",
      data: user
    }, { status: 201 });

  } catch (error) {
    console.error("Registration error:", error);
    
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
  let prisma;
  
  try {
    prisma = new PrismaClient();
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        name: true,
        role: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({
      success: true,
      count: users.length,
      data: users
    });
    
  } catch (error) {
    console.error("Get users error:", error);
    return NextResponse.json({
      success: false,
      message: "Gagal mengambil data"
    }, { status: 500 });
  } finally {
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}