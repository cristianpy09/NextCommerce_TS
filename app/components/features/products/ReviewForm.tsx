"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { Star } from "lucide-react";
import { toast } from "sonner";
import Button from "@/app/components/ui/Button";

interface ReviewFormProps {
    productId: string;
    onReviewSubmit?: (review: { rating: number; comment: string; username: string }) => void;
}

export default function ReviewForm({ productId, onReviewSubmit }: ReviewFormProps) {
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            toast.error("Debes iniciar sesión para opinar");
            return;
        }
        if (rating === 0) {
            toast.error("Por favor selecciona una calificación");
            return;
        }

        // Mock submission - in real app would go to backend
        toast.success("¡Gracias por tu opinión!");
        if (onReviewSubmit) {
            onReviewSubmit({
                rating,
                comment,
                username: user.name
            });
        }
        setRating(0);
        setComment("");
    };

    return (
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mt-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Escribe una reseña</h3>

            {!user ? (
                <p className="text-sm text-gray-500">
                    <a href="/login" className="text-blue-600 underline">Inicia sesión</a> para dejar tu opinión.
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setRating(star)}
                                className={`text-2xl transition-colors ${star <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    }`}
                            >
                                <Star />
                            </button>
                        ))}
                        <span className="text-sm text-gray-500 ml-2">
                            {rating > 0 ? `${rating} estrellas` : "Selecciona"}
                        </span>
                    </div>

                    <textarea
                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none resize-none mb-4"
                        rows={4}
                        placeholder="¿Qué te pareció este producto?"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />

                    <Button text="Publicar Reseña" type="submit" variant="modern" size="sm" />
                </form>
            )}
        </div>
    );
}
