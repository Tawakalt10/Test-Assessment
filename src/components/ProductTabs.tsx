import React, { useState } from 'react';
import './ProductTabs.css';

type TabType = 'description' | 'ingredients' | 'directions';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('description');

  return (
    <section className="product-tabs-section">
      <div className="tabs-container">
        
        {/* Tab Headers */}
        <div className="tab-headers">
          <button
            className={`tab-button ${activeTab === 'description' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Description
          </button>

          <button
            className={`tab-button ${activeTab === 'ingredients' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ingredients
          </button>

          <button
            className={`tab-button ${activeTab === 'directions' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('directions')}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Directions
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          
          {/* DESCRIPTION TAB */}
          {activeTab === 'description' && (
            <div className="tab-panel" key="description">
              <div className="content-header">
                <h2 className="content-title">About Radiance & Glow Face Oil</h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="content-body">
                <p className="content-paragraph">
                  Our radiance and glow face oil is carefully crafted to add extra glow to the skin 
                  while providing a nourishing and indulgent experience. Harnessing the power of{' '}
                  <strong className="highlight-text">Bergamot essential oil</strong>, known for skin 
                  health-boosting properties, our glow serum is a potent solution that promotes 
                  relaxation and harmony.
                </p>

                <p className="content-paragraph">
                  This therapeutic aromatherapy-inspired face oil is personally crafted by our 
                  founder Ishita Saxena to help women navigate their skin's transformation across 
                  different life stages. Whether you're experiencing the hormonal changes of 
                  pregnancy, the transitions of perimenopause, or the natural aging process, our 
                  ritual is designed to restore skin's natural luminosity.
                </p>

                <div className="benefits-section">
                  <h3 className="benefits-title">Key Benefits</h3>
                  
                  <div className="benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon">✨</div>
                      <div className="benefit-content">
                        <h4 className="benefit-heading">Reduces Dullness</h4>
                        <p className="benefit-text">Improves skin tone and brings back natural radiance</p>
                      </div>
                    </div>

                    <div className="benefit-card">
                      <div className="benefit-icon">🌟</div>
                      <div className="benefit-content">
                        <h4 className="benefit-heading">Flawless Glow</h4>
                        <p className="benefit-text">Controls blemishes and evens out complexion</p>
                      </div>
                    </div>

                    <div className="benefit-card">
                      <div className="benefit-icon">💧</div>
                      <div className="benefit-content">
                        <h4 className="benefit-heading">Deep Hydration</h4>
                        <p className="benefit-text">Nourishes and hydrates all skin types</p>
                      </div>
                    </div>

                    <div className="benefit-card">
                      <div className="benefit-icon">🌸</div>
                      <div className="benefit-content">
                        <h4 className="benefit-heading">Youthful Complexion</h4>
                        <p className="benefit-text">Fades dark spots and promotes radiance</p>
                      </div>
                    </div>

                    <div className="benefit-card">
                      <div className="benefit-icon">🍊</div>
                      <div className="benefit-content">
                        <h4 className="benefit-heading">Bergamot Power</h4>
                        <p className="benefit-text">Brightens with natural bergamot extract</p>
                      </div>
                    </div>

                    <div className="benefit-card">
                      <div className="benefit-icon">💚</div>
                      <div className="benefit-content">
                        <h4 className="benefit-heading">All Skin Types</h4>
                        <p className="benefit-text">Suitable for sensitive skin too</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="special-note">
                  <div className="note-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="note-text">
                    <strong>What Makes It Special:</strong> Our natural glow serum combines the 
                    potency of bergamot essential oil with a blend of other high-quality ingredients, 
                    carefully selected to enhance its effectiveness.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* INGREDIENTS TAB */}
          {activeTab === 'ingredients' && (
            <div className="tab-panel" key="ingredients">
              <div className="content-header">
                <h2 className="content-title">Natural Ingredients</h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="content-body">
                <p className="content-paragraph intro-text">
                  Our face oil is crafted with a blend of 7 carefully selected oils that work 
                  synergistically to improve skin tone, fade dark spots, and promote a youthful complexion.
                </p>

                <div className="ingredients-list">
                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Bergamot Essential Oil</h4>
                      <p className="ingredient-description">
                        Known for its skin health-boosting properties, brightens complexion and 
                        promotes relaxation through aromatherapy.
                      </p>
                    </div>
                  </div>

                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Jojoba Oil</h4>
                      <p className="ingredient-description">
                        Deeply moisturizing and similar to skin's natural oils, helps balance oil 
                        production and provides long-lasting hydration.
                      </p>
                    </div>
                  </div>

                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Rosehip Oil</h4>
                      <p className="ingredient-description">
                        Rich in vitamins A and C, helps fade dark spots, reduce fine lines, and 
                        improve overall skin texture.
                      </p>
                    </div>
                  </div>

                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Sweet Almond Oil</h4>
                      <p className="ingredient-description">
                        Gentle and nourishing, perfect for sensitive skin, provides deep hydration 
                        without clogging pores.
                      </p>
                    </div>
                  </div>

                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Vitamin E Oil</h4>
                      <p className="ingredient-description">
                        Powerful antioxidant that protects skin from environmental damage and promotes healing.
                      </p>
                    </div>
                  </div>

                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Argan Oil</h4>
                      <p className="ingredient-description">
                        Moroccan liquid gold, rich in fatty acids and vitamin E for ultimate nourishment.
                      </p>
                    </div>
                  </div>

                  <div className="ingredient-item">
                    <div className="ingredient-marker">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ingredient-content">
                      <h4 className="ingredient-name">Lavender Oil</h4>
                      <p className="ingredient-description">
                        very Calming and soothing, helps reduce inflammation and promotes skin healing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ingredients-footer">
                  <p className="footer-note">
                    <strong>100% Natural</strong> • Cruelty-Free • No Synthetic Fragrances • No Parabens
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DIRECTIONS TAB */}
          {activeTab === 'directions' && (
            <div className="tab-panel" key="directions">
              <div className="content-header">
                <h2 className="content-title">How To Use</h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="content-body">
                <p className="content-paragraph intro-text">
                  Follow these simple steps to get the most out of your Radiance & Glow Face Oil 
                  and achieve that luminous, healthy glow.
                </p>

                <div className="directions-steps">
                  <div className="step-card">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4 className="step-title">Cleanse Your Face</h4>
                      <p className="step-description">
                        Start with a clean, freshly washed face. Pat dry gently with a soft towel, 
                        leaving skin slightly damp for better absorption.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4 className="step-title">Dispense 2-4 Drops</h4>
                      <p className="step-description">
                        Take 2-4 drops of the face oil onto your palm. A little goes a long way, 
                        so start with less and add more if needed.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4 className="step-title">Warm Between Palms</h4>
                      <p className="step-description">
                        Rub your palms together to warm up the oil. This helps activate the 
                        essential oils and makes application easier.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4 className="step-title">Apply & Massage</h4>
                      <p className="step-description">
                        Gently press and massage the oil into your face using upward circular motions. 
                        Focus on areas that need extra attention like dark spots or dry patches.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4 className="step-title">Don't Forget Your Neck</h4>
                      <p className="step-description">
                        Extend the application to your neck and décolletage area using upward strokes 
                        for complete care.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <div className="step-number">6</div>
                    <div className="step-content">
                      <h4 className="step-title">Use Day & Night</h4>
                      <p className="step-description">
                        For best results, use twice daily - once in the morning before sunscreen, 
                        and once at night before bed. Can be used alone or mixed with your moisturizer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="tips-section">
                  <h3 className="tips-title">
                    <svg className="tips-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Pro Tips
                  </h3>
                  
                  <ul className="tips-list">
                    <li>Mix a drop with your foundation for a dewy, glowing finish</li>
                    <li>Use as an overnight mask by applying a generous layer before bed</li>
                    <li>Store in a cool, dry place away from direct sunlight</li>
                    <li>Perform a patch test before first use if you have sensitive skin</li>
                    <li>Results are best seen with consistent use over 2-4 weeks</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProductTabs;