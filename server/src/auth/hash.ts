import bcrypt from "bcrypt";

const salt_rounds: number = 10;

export function hashPassword(password: string): string {
  const salt = bcrypt.genSaltSync(salt_rounds);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}
