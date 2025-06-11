import React from "react";

export interface MenuItem {
    key: string;
    label: React.ReactNode;
}

export interface FieldType {
    username?: string;
    password?: string;
    remember?: boolean;
}
