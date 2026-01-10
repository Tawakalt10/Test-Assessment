import React, { useState, useMemo } from 'react';
import './ReviewSection.css';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  sentiment: 'loved' | 'amazing' | 'helpful' | 'satisfied';
  featured?: boolean;
}

const ReviewSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const animateStats = true; // Static value, no state needed

  // Sample review data - defined as constant
  const allReviews: Review[] = useMemo(() => [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "I have been using the Arezou face Oil for the past 2 months and I am absolutely satisfied by the results. My skin looks radiant and feels so soft. The bergamot scent is divine!",
      date: "2 weeks ago",
      verified: true,
      sentiment: "loved",
      featured: true
    },
    {
      id: 2,
      name: "Ananya Singh",
      rating: 5,
      text: "Arezou has not only improved my skin tone but also given it a youthful look. I'm getting numerous compliments for the new glow. Worth every penny!",
      date: "3 weeks ago",
      verified: true,
      sentiment: "amazing",
      featured: true
    },
    {
      id: 3,
      name: "Meera Agarwal",
      rating: 5,
      text: "The oil you sent is very very soothing and I can see the difference slowly. Thank you for this. 🥰",
      date: "1 month ago",
      verified: true,
      sentiment: "satisfied",
      featured: true
    },
    {
      id: 4,
      name: "Divya Iyer",
      rating: 5,
      text: "Hi I have used the essential oils. I am very happy with them. The face oil is also good. Thanks!",
      date: "1 month ago",
      verified: true,
      sentiment: "helpful"
    },
    {
      id: 5,
      name: "Rahul K.",
      rating: 4,
      text: "Good quality fragrance at decent value. Initially seemed light, but develops beautifully throughout the day.",
      date: "2 months ago",
      verified: true,
      sentiment: "satisfied"
    },
    {
      id: 6,
      name: "Rohan J.",
      rating: 4,
      text: "Decent for morning wear. Good for light, fresh scent lovers. The delivery was quick and packaging was secure.",
      date: "2 months ago",
      verified: true,
      sentiment: "helpful"
    },
    {
      id: 7,
      name: "Deepika M.",
      rating: 3,
      text: "Different from expectations but decent. This fragrance has a unique scent profile that's different from what I usually prefer.",
      date: "2 months ago",
      verified: false,
      sentiment: "satisfied"
    },
    {
      id: 8,
      name: "Sneha P.",
      rating: 5,
      text: "Absolutely love this! My skin has never felt better. The natural ingredients make such a difference.",
      date: "3 weeks ago",
      verified: true,
      sentiment: "loved"
    }
  ], []);

  const ratingDistribution = [
    { stars: 5, count: 187, percentage: 71 },
    { stars: 4, count: 45, percentage: 17 },
    { stars: 3, count: 18, percentage: 7 },
    { stars: 2, count: 8, percentage: 3 },
    { stars: 1, count: 4, percentage: 2 }
  ];

  // Use useMemo to derive filtered reviews - no setState in effect!
  const visibleReviews = useMemo(() => {
    if (activeFilter === '5star') {
      return allReviews.filter(r => r.rating === 5);
    } else if (activeFilter === '4star') {
      return allReviews.filter(r => r.rating === 4);
    } else if (activeFilter === 'verified') {
      return allReviews.filter(r => r.verified);
    } else if (activeFilter === 'featured') {
      return allReviews.filter(r => r.featured);
    }
    return allReviews; // 'all' filter
  }, [activeFilter, allReviews]);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'loved': return 'sentiment-loved';
      case 'amazing': return 'sentiment-amazing';
      case 'helpful': return 'sentiment-helpful';
      case 'satisfied': return 'sentiment-satisfied';
      default: return '';
    }
  };

  const getSentimentLabel = (sentiment: string) => {
    switch (sentiment) {
      case 'loved': return '💜 Loved It';
      case 'amazing': return '✨ Amazing';
      case 'helpful': return '🌟 Helpful';
      case 'satisfied': return '😊 Satisfied';
      default: return '';
    }
  };

  const featuredReviews = useMemo(() => allReviews.filter(r => r.featured), [allReviews]);

  return (
    <section className="review-section">
      <div className="review-container">
        
        {/* Header */}
        <div className="review-header">
          <h2 className="review-main-title">Customer Reviews</h2>
          <p className="review-subtitle">See what our customers are saying about their experience</p>
        </div>

        {/* Stats Dashboard */}
        <div className="stats-dashboard">
          <div className="stat-card stat-primary">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className={`stat-number ${animateStats ? 'animate' : ''}`}>4.8</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>

          <div className="stat-card stat-secondary">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <div className={`stat-number ${animateStats ? 'animate' : ''}`}>198</div>
              <div className="stat-label">Total Reviews</div>
            </div>
          </div>

          <div className="stat-card stat-tertiary">
            <div className="stat-icon">💚</div>
            <div className="stat-content">
              <div className={`stat-number ${animateStats ? 'animate' : ''}`}>93%</div>
              <div className="stat-label">Recommend</div>
            </div>
          </div>

          <div className="stat-card stat-quaternary">
            <div className="stat-icon">✓</div>
            <div className="stat-content">
              <div className={`stat-number ${animateStats ? 'animate' : ''}`}>85%</div>
              <div className="stat-label">Verified</div>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="rating-distribution">
          <h3 className="distribution-title">Rating Breakdown</h3>
          <div className="distribution-bars">
            {ratingDistribution.map((rating, index) => (
              <div key={rating.stars} className="distribution-row" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="distribution-stars">
                  {[...Array(rating.stars)].map((_, i) => (
                    <svg key={i} className="star-mini" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="distribution-bar-container">
                  <div 
                    className="distribution-bar" 
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <div className="distribution-count">{rating.count}</div>
                <div className="distribution-percentage">{rating.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="filter-section">
          <button 
            className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Reviews
          </button>
          <button 
            className={`filter-pill ${activeFilter === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveFilter('featured')}
          >
            ⭐ Featured
          </button>
          <button 
            className={`filter-pill ${activeFilter === '5star' ? 'active' : ''}`}
            onClick={() => setActiveFilter('5star')}
          >
            5 Stars
          </button>
          <button 
            className={`filter-pill ${activeFilter === '4star' ? 'active' : ''}`}
            onClick={() => setActiveFilter('4star')}
          >
            4 Stars
          </button>
          <button 
            className={`filter-pill ${activeFilter === 'verified' ? 'active' : ''}`}
            onClick={() => setActiveFilter('verified')}
          >
            ✓ Verified
          </button>
        </div>

        {/* Featured Reviews Carousel */}
        <div className="featured-carousel">
          <h3 className="carousel-title">⭐ Featured Reviews</h3>
          <div className="carousel-container">
            {featuredReviews.map((review, index) => (
              <div key={review.id} className="featured-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="featured-header">
                  <div className="featured-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="featured-info">
                    <div className="featured-name">{review.name}</div>
                    <div className="featured-stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {review.verified && (
                    <div className="verified-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="featured-text">{review.text}</p>
                <div className="featured-footer">
                  <span className={`sentiment-badge ${getSentimentColor(review.sentiment)}`}>
                    {getSentimentLabel(review.sentiment)}
                  </span>
                  <span className="featured-date">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="reviews-grid">
          <h3 className="grid-title">All Customer Reviews ({visibleReviews.length})</h3>
          <div className="reviews-cards">
            {visibleReviews.map((review, index) => (
              <div key={review.id} className="review-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="review-card-header">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="review-info">
                    <div className="review-name-row">
                      <span className="review-name">{review.name}</span>
                      {review.verified && (
                        <div className="verified-badge-mini">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="review-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`star ${i < review.rating ? 'filled' : 'empty'}`}
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-footer">
                  <span className={`sentiment-badge-small ${getSentimentColor(review.sentiment)}`}>
                    {getSentimentLabel(review.sentiment)}
                  </span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="review-cta">
          <div className="cta-content">
            <h3 className="cta-title">Share Your Experience</h3>
            <p className="cta-text">Your feedback helps us improve and helps others make informed decisions</p>
            <button className="cta-button">
              <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Write a Review
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewSection;