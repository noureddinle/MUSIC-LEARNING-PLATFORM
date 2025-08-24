import { Course, Product, MusicProgram } from '../types/types';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchCourses(page: number = 1, limit: number = 10): Promise<{ courses: Course[], total: number, page: number, limit: number }> {
  const response = await fetch(`${API_BASE_URL}/api/courses`);
  if (!response.ok) {
    throw new Error(`Failed to fetch courses: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export async function fetchProducts(page: number = 1, limit: number = 10): Promise<{ products: Product[], total: number, page: number, limit: number }> {
  const response = await fetch(`${API_BASE_URL}/api/products`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchCourse(id: string): Promise<Course> {
  const response = await fetch(`${API_BASE_URL}/api/courses/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch course: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchMusicPrograms(): Promise<MusicProgram[]> {
  const response = await fetch(`${API_BASE_URL}/api/music-programs`);
  if (!response.ok) {
    throw new Error(`Failed to fetch music programs: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchMusicProgram(id: string): Promise<MusicProgram> {
  const response = await fetch(`${API_BASE_URL}/api/music-programs/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch music program: ${response.statusText}`);
  }
  return response.json();
}