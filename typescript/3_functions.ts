function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface myPosition {
  x: number | undefined,
  y: number | undefined,
}

function position() : myPosition;
//40:19