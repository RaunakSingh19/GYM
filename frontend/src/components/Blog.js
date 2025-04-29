"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; 
// import { Button } from "@mui/material";
import "../styles/BlogPage.css";

const BlogPage = () => {
    //   const [exercises, setExercises] = useState([]);
      const navigate = useNavigate();

  return (
    <div className="blog-container">
      <div className="hero-header">
        <h1>Welcome to the Fitness Blog</h1>
        <p className="hero-subtext">Your guide to a healthier lifestyle</p>
      </div>

      <div className="blog-section">
        <h2>Mastering the Mind-Muscle Connection</h2>
        <div className="section-content">
          <p>The mind-muscle connection is an often overlooked but powerful concept in the world of fitness. It refers to the conscious and deliberate focus on a specific muscle group during an exercise. By actively engaging your mind during a workout, you can maximize muscle activation and growth.</p>
          <p>Research shows that athletes who focus on the contraction of a specific muscle during lifts recruit more muscle fibers. For example, when performing a bicep curl, concentrating on squeezing the biceps leads to better hypertrophy than just going through the motions.</p>
          <p>Start by slowing down your reps and visualizing the muscle shortening and lengthening. Combine this with controlled breathing to elevate your training intensity. This technique not only improves strength but also enhances movement efficiency and reduces the risk of injury.</p>
        </div>
      </div>

      <div className="blog-section alt">
        <h2>The Power of Macronutrients</h2>
        <div className="section-content">
          <p>A well-balanced diet begins with understanding macronutrients: proteins, carbohydrates, and fats. Each plays a unique and crucial role in overall health and performance.</p>
          <p><strong>Protein</strong> is the building block of muscle. It helps in muscle repair, hormone production, and immune function. Sources include lean meats, fish, legumes, and dairy.</p>
          <p><strong>Carbohydrates</strong> are your body's primary energy source. Complex carbs like whole grains, oats, and vegetables provide sustained energy without blood sugar spikes.</p>
          <p><strong>Fats</strong> support cell growth, protect organs, and regulate hormones. Avocados, nuts, seeds, and olive oil are excellent healthy fat sources.</p>
          <p>A good ratio of these nutrients varies based on your goal: weight loss, muscle gain, or maintenance. Always consult a dietitian for personalized advice.</p>
        </div>
      </div>

      <div className="blog-section">
        <h2>Types of Resistance Training</h2>
        <div className="section-content">
          <p>Resistance training isn't limited to lifting weights. It encompasses various techniques that challenge muscles against a force, helping build strength, endurance, and muscle mass.</p>
          <p><strong>Bodyweight Training:</strong> Push-ups, squats, and planks are excellent for beginners and require no equipment.</p>
          <p><strong>Free Weights:</strong> Dumbbells, kettlebells, and barbells provide a range of motion and challenge stabilizer muscles.</p>
          <p><strong>Resistance Bands:</strong> Portable and joint-friendly, bands are ideal for rehabilitation or warm-ups.</p>
          <p><strong>Machines:</strong> These help isolate muscles and are great for controlled movement, especially for injury recovery.</p>
          <p>Regardless of the method, progressive overload—gradually increasing the resistance—is the key to continuous gains.</p>
        </div>
      </div>

      <div className="blog-section alt">
        <h2>HIIT vs. LISS: Which Is Better?</h2>
        <div className="section-content">
          <p>Cardiovascular exercise is essential for heart health and fat loss, but not all cardio is created equal. High-Intensity Interval Training (HIIT) and Low-Intensity Steady-State (LISS) are two popular methods.</p>
          <p><strong>HIIT</strong> involves short bursts of intense activity followed by rest. It's time-efficient, boosts metabolism, and preserves muscle mass.</p>
          <p><strong>LISS</strong>, on the other hand, consists of steady, moderate exercise like walking or cycling. It's easier on the joints and sustainable for longer durations.</p>
          <p>A combination of both can offer the best results. HIIT is perfect for busy schedules, while LISS is great for recovery days or beginners.</p>
        </div>
      </div>

      <div className="blog-section">
        <h2>Busting Common Fitness Myths</h2>
        <div className="section-content">
          <p>The fitness world is rife with misinformation. Let's bust a few persistent myths:</p>
          <ul>
            <li><strong>Myth:</strong> Lifting makes women bulky. <strong>Fact:</strong> Women have lower testosterone levels and build muscle differently.</li>
            <li><strong>Myth:</strong> Spot reduction works. <strong>Fact:</strong> You can't target fat loss—your body decides where fat burns first.</li>
            <li><strong>Myth:</strong> Carbs are the enemy. <strong>Fact:</strong> Complex carbs are vital for energy and brain function.</li>
            <li><strong>Myth:</strong> No pain, no gain. <strong>Fact:</strong> Pain may indicate injury; always listen to your body.</li>
          </ul>
        </div>
      </div>

      <div className="blog-section alt">
        <h2>The Mental Wellness-Fitness Connection</h2>
        <div className="section-content">
          <p>Physical health and mental health are closely linked. Exercise reduces cortisol levels, boosts serotonin, and helps combat depression.</p>
          <p>Activities like yoga and tai chi are particularly effective in reducing anxiety and promoting mindfulness. Journaling your progress and setting affirmations can amplify mental resilience.</p>
          <p>Consider group fitness classes or outdoor activities to beat loneliness and stay motivated. A strong community can uplift your spirits and reinforce accountability.</p>
        </div>
      </div>

      <div className="blog-section">
        <h2>Training Periodization & Recovery</h2>
        <div className="section-content">
          <p>Periodization is the strategic planning of training cycles to optimize performance and prevent burnout. It includes phases like hypertrophy, strength, power, and deload weeks.</p>
          <p>Ignoring recovery is one of the biggest mistakes in fitness. Rest days allow muscles to rebuild and grow. Incorporate active recovery, like light stretching, walking, or foam rolling.</p>
          <p>Sleep, nutrition, and stress management also play crucial roles in recovery. Track your energy levels and adjust training volume accordingly.</p>
        </div>
      </div>

      <div className="blog-section alt">
        <h2>Sample 1-Day Balanced Meal Plan</h2>
        <div className="section-content">
          <p><strong>Breakfast:</strong> Oatmeal with berries, almond butter, and a scoop of protein powder.</p>
          <p><strong>Snack:</strong> Greek yogurt with walnuts and honey.</p>
          <p><strong>Lunch:</strong> Grilled chicken breast, quinoa, and steamed broccoli.</p>
          <p><strong>Snack:</strong> Apple slices with peanut butter.</p>
          <p><strong>Dinner:</strong> Salmon fillet, sweet potatoes, and sautéed spinach.</p>
          <p><strong>Hydration:</strong> 2-3 liters of water throughout the day with herbal teas in between.</p>
        </div>
      </div>

      <div className="blog-section">
        <h2>Home Workouts vs. Gym Workouts</h2>
        <div className="section-content">
          <p>Home workouts offer flexibility and privacy, ideal for those with tight schedules or social anxiety. Using minimal equipment like resistance bands and dumbbells can still deliver results.</p>
          <p>Gyms, however, provide variety, structure, and expert guidance. The atmosphere can be motivating and conducive to pushing limits.</p>
          <p>Choose based on your goals, access, and lifestyle. The best workout is the one you can do consistently.</p>
        </div>
      </div>

      <div className="blog-section alt">
        <h2>Fitness Across Life Stages</h2>
        <div className="section-content">
          <p>Fitness needs evolve with age. For children, play-based movement and sports promote coordination and growth. Teens benefit from strength training and sports participation under supervision.</p>
          <p>Adults should prioritize strength, mobility, and cardiovascular endurance. For seniors, balance, joint health, and functional movements are key to maintaining independence.</p>
          <p>It's never too late to start. Even walking 20 minutes daily in your later years can enhance longevity and quality of life.</p>
        </div>
      </div>

      <div className="cta-banner">
        <h2>Ready to Transform Your Fitness Journey?</h2>
        <p>Join our community and get personalized workout plans and nutrition advice.</p>
        <button className="cta-button"   onClick={() => navigate("/Home")} >Back to home page</button>
        {/* <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#d81b60",
                                color: "#fff",
                                textTransform: "uppercase",
                                fontWeight: "600",
                                padding: "1.0rem 1.9rem",
                                marginTop:"15px",
                                "&:hover": { backgroundColor: "#ad1457" },
                              }}
                              onClick={() => navigate("/TicTacToe")}
                            >Play Tic Tac Toe</Button> */}
      </div>

      <div className="blog-footer">
        <p>© 2023 Fitness Blog. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BlogPage;
