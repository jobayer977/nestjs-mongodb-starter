import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { ENV } from 'src/ENV';

const SALT_ROUNDS: number = ENV.jwt.SALT_ROUNDS;

@Injectable()
export class BcryptHelper {
  public async hashString(
    plainText: string,
    saltRounds: number = SALT_ROUNDS
  ): Promise<string> {
    return hash(plainText, saltRounds);
  }

  public async compareHash(
    plainText: string,
    hashString: string
  ): Promise<boolean> {
    return compare(plainText, hashString);
  }
}
