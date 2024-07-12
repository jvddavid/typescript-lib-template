import { sum } from '@/math/sum'

export class Lib {
  private readonly a = 10

  public static sayHello(): string {
    return 'Hello, world!'
  }

  sum(b: number): number {
    return sum(this.a, b)
  }
}
