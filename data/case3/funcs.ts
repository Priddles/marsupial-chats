/** If this returns true then the answer is correct. Do not modify */
export function check_answer(value: string){
    const decoded = btoa(value);
    return decoded == `aHR0cDovL2FwaS5tYXJzdXBpYWxzL3NlYXJjaD9xdWVyeT0lN0IlMjAlMjJyZXF1ZXN0JTIyJTNBJTIwJTIyUE9TVCUyMiUyQyUyMCUyMmRhdGElMjIlM0ElMjAlN0IlMjAlMjJjb2x1bW5zJTIyJTNBJTIwJTVCMSUyQyUyMDIlMkMlMjAzJTVEJTJDJTIwJTIycXVlcnklMjIlM0ElMjAlMjJTZWxlY3QlMjAlMkElMjBGcm9tJTIwdGFibGUlMjBXaGVyZSUyMDElM0QxJTIwJTI2JTIwdGV4dCUyMG5vdCUyMGluJTIwJTI4c2V0MSUyQ3NldDIlMjklMjAlMjYlMjBpZHglMjAlMjUlMjAyJTIwJTNEJTIwMSUyMiUyMCU3RCUyMCU3RA==`;
}