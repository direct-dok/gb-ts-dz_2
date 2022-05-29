export function addPrefixNull(number:number) :string | number {
    return number < 10 ? '0' + number : number
}

