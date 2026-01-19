"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/productsType";
import { toast } from "sonner";

export interface Order {
    id: string;
    date: string;
    total: number;
    status: "processing" | "shipped" | "delivered" | "cancelled";
    items: {
        product: Product;
        quantity: number;
    }[];
}

interface OrderContextType {
    orders: Order[];
    createOrder: (items: { product: Product; quantity: number }[], total: number) => void;
    isLoadingOrders: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrders must be used within an OrderProvider");
    }
    return context;
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoadingOrders, setIsLoadingOrders] = useState(true);

    useEffect(() => {
        // Simulate fetching orders from DB
        const savedOrders = localStorage.getItem("orders");
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
        setIsLoadingOrders(false);
    }, []);

    const createOrder = (items: { product: Product; quantity: number }[], total: number) => {
        const newOrder: Order = {
            id: "ord_" + Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString(),
            total,
            status: "processing",
            items
        };

        setOrders((prev) => {
            const updated = [newOrder, ...prev];
            localStorage.setItem("orders", JSON.stringify(updated));
            return updated;
        });

        // In a real app, successful order creation would be handled after payment
    };

    return (
        <OrderContext.Provider value={{ orders, createOrder, isLoadingOrders }}>
            {children}
        </OrderContext.Provider>
    );
};
