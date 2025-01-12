import React, { useState } from 'react';
import { useParams } from '@tanstack/react-router';
import { useStore } from '../store/store';
import { Product, Comment } from '../types/types';

export const ProductPage = () => {
  const { productId } = useParams();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState<Comment[]>([]);

  // В реальном приложении здесь будет API запрос
  const product: Product = {
    id: 1,
    name: 'Тестовый товар',
    price: 1000,
    category: 'Электроника',
    image: '/product1.jpg',
    description: 'Описание товара',
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: comments.length + 1,
      productId: Number(productId),
      text: comment,
      rating,
      author: 'Пользователь',
      date: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
    setComment('');
    setRating(5);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">{product.price} ₽</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Отзывы</h2>
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="mb-4">
            <label className="block mb-2">Оценка</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border p-2 rounded"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Комментарий</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border p-2 rounded"
              rows={4}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Отправить отзыв
          </button>
        </form>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border p-4 rounded">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-gray-500">Оценка: {comment.rating}/5</span>
              </div>
              <p>{comment.text}</p>
              <span className="text-sm text-gray-500">
                {new Date(comment.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};