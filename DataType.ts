// interfaces define type and rules for single elements.
// my interface in this case isn't generic. it accepts only these specific values
interface UKSize {
    uksize: "8" | "10" | "12" | "14" | "16" | "18" | "20" | "22";
}
interface Size {
    size: "S" | "M" | "L" | "XL";
}

export { UKSize }
export { Size }