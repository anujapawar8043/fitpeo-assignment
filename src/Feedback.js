import React from 'react';
import './styles/Feedback.scss';

function Feedback({ title }) {
  return (
    <div className="feedback">
      <h3 className="feedback-title">{title}</h3>
      <div className="feedback-item">
        <h4 className="customer-name">Jenny Wilson</h4>
        <div className="rating">★★★★★</div>
        <p className="feedback-text">
          The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
        </p>
      </div>
      <div className="feedback-item">
        <h4 className="customer-name">Dianne Russell</h4>
        <div className="rating">★★★★★</div>
        <p className="feedback-text">
          We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.
        </p>
      </div>
      <div className="feedback-item">
        <h4 className="customer-name">Jenny Wilson</h4>
        <div className="rating">★★★★★</div>
        <p className="feedback-text">
          The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
        </p>
      </div>
      <div className="feedback-item">
        <h4 className="customer-name">Jenny Wilson</h4>
        <div className="rating">★★★★★</div>
        <p className="feedback-text">
          The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
        </p>
      </div>
    </div>
  );
}

export default Feedback;
