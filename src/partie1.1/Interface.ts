export interface Robot {
    assembler(): void;
    activer(): void;
    travailler(): void;
    addOption(optionName: string): void;
    getDescriptionAll(): void;
}