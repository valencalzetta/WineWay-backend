//reúne herramientas que las rutas reutilizan para validar datos y señalar errores HTTP
import { z } from 'zod';
//La clase no envía la respuesta por sí misma: el manejador de errores de app.ts la reconoce y construye la respuesta
export class ErrorHTTP extends Error {
  constructor(
    public status: number,
    public codigo: string,
    mensaje: string,
    public campos?: Record<string, string>,
  ) {
    super(mensaje);
  }
}
export const id = z.string().trim().min(1).max(120);
export const texto = z.string().trim().min(1).max(200);
export const dinero = z.number().int().min(0).max(1000000000);
export const fecha = z
  .string()
  .refine(
    (v) =>
      /^\d{4}-\d{2}-\d{2}$/.test(v) &&
      !Number.isNaN(Date.parse(v)) &&
      new Date(v).toISOString().slice(0, 10) === v,
    'Fecha inválida; usar YYYY-MM-DD.',
  );
  //condicion de si se encuentra o no un dato, y si no se encuentra lanza un error HTTP 404
export function encontrado<T>(dato: T | null | undefined): T {
  if (!dato) throw new ErrorHTTP(404, 'NO_ENCONTRADO', 'No se encontró el recurso.');
  return dato;
}
//comprueba una condición y si no se cumple lanza un error HTTP 400
export function exigir(condicion: unknown, mensaje: string): asserts condicion {
  if (!condicion) throw new ErrorHTTP(400, 'DATOS_INVALIDOS', mensaje);
}
