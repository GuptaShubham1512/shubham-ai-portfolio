import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Brain,
  Code2,
  Award,
  Users,
  CalendarCheck,
  Rocket,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";


const achievements = [
  {
    id: "01",
    value: "350+",
    label: "Problems",
    title: "DSA Problem Solving",
    category: "PROBLEM SOLVING",
    description:
      "Solved 350+ Data Structures and Algorithms problems across GeeksforGeeks, LeetCode and competitive programming practice, strengthening algorithmic thinking and coding efficiency.",
    icon: Code2,
  },
  {
    id: "02",
    value: "IEEE",
    label: "Secretary",
    title: "IEEE College Secretary",
    category: "LEADERSHIP",
    description:
      "Served as IEEE College Secretary, contributing to technical initiatives, coordinating student activities and managing multiple IEEE college events.",
    icon: Users,
  },
  {
    id: "03",
    value: "MANY",
    label: "Events",
    title: "IEEE Event Management",
    category: "EVENT MANAGEMENT",
    description:
      "Managed and coordinated multiple IEEE college events, taking responsibility for planning, execution, team coordination and successful event delivery.",
    icon: CalendarCheck,
  },
  {
    id: "04",
    value: "#1",
    label: "Recognition",
    title: "Most Event Organiser Student",
    category: "IEEE • INDORE BRANCH",
    description:
      "Awarded as the Most Event Organiser Student by the IEEE Indore Branch for active contribution and involvement in organising IEEE activities and events.",
    icon: Award,
  },
  {
    id: "05",
    value: "160",
    label: "Days",
    title: "160 Days DSA Challenge",
    category: "GEEKSFORGEEKS",
    description:
      "Successfully completed the GeeksforGeeks 160 Days Problem Solving Challenge with consistent daily practice across core DSA topics and algorithms.",
    icon: Trophy,
  },
  {
    id: "06",
    value: "SF",
    label: "2025",
    title: "SIH 2025 Semi-Finalist",
    category: "SMART INDIA HACKATHON",
    description:
      "Reached the Semi-Finalist stage of Smart India Hackathon 2025, working on a real-world problem and developing a technology-driven solution as part of a team.",
    icon: Rocket,
  },
  {
    id: "07",
    value: "TEACHER",
    label: "TamGam",
    title: "Teaching & Mentoring",
    category: "TAMGAM",
    description:
      "Worked as a teacher at TamGam, helping students learn technical concepts and sharing knowledge through an interactive learning environment.",
    icon: GraduationCap,
  },
  {
    id: "08",
    value: "AI",
    label: "Agents",
    title: "AI Agents Development",
    category: "VIQRILABS",
    description:
      "Completed a hands-on AI Agents session covering LangGraph, MCP, FastAPI, agent workflows and orchestration, strengthening my understanding of Agentic AI.",
    icon: Brain,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">

      {/* Background Effects */}
      <div className="achievement-glow achievement-glow-one" />
      <div className="achievement-glow achievement-glow-two" />

      <div className="achievements-container">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <motion.div
          className="achievements-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          <div className="achievement-label">

            <span className="achievement-label-line" />

            <span>MY ACHIEVEMENTS</span>

            <Sparkles size={13} />

          </div>


          <h1>
            Learning.
            <br />

            <span>Building.</span>
            <br />

            <strong>Growing.</strong>
          </h1>


          <p>
            Milestones, certifications and learning achievements from
            my journey across software development, Data Structures &
            Algorithms, AI and cybersecurity.
          </p>

        </motion.div>


        {/* =====================================
            FEATURED ACHIEVEMENT
        ====================================== */}

        <motion.div
          className="achievement-feature"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >

          <div className="feature-background-number">
            350+
          </div>


          <div className="feature-top">

            <div className="feature-icon">
              <Trophy size={25} />
            </div>

            <span className="feature-tag">
              FEATURED ACHIEVEMENT
            </span>

          </div>


          <div className="feature-content">

            <span className="feature-small-title">
              DATA STRUCTURES & ALGORITHMS
            </span>


            <h2>
              350+
              <span> Problems Solved</span>
            </h2>


            <p>
              Consistently practicing Data Structures and Algorithms
              to improve problem-solving ability, logical thinking
              and coding efficiency.
            </p>

          </div>


          <div className="feature-bottom">

          


            <div className="feature-arrow">
              <ArrowUpRight size={18} />
            </div>

          </div>

        </motion.div>


        {/* =====================================
            ACHIEVEMENT CARDS
        ====================================== */}

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >

          {achievements.map((achievement) => {

            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.id}
                className="achievement-card"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="card-glow" />


                {/* Card Header */}

                <div className="achievement-card-header">

                  <div className="achievement-icon">
                    <Icon size={21} />
                  </div>

                  <span className="achievement-number">
                    {achievement.id}
                  </span>

                </div>


                {/* Value */}

                <div className="achievement-value">

                  <strong>
                    {achievement.value}
                  </strong>

                  <span>
                    {achievement.label}
                  </span>

                </div>


                {/* Content */}

                <div className="achievement-card-content">

                  <span className="achievement-category">
                    {achievement.category}
                  </span>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    {achievement.description}
                  </p>

                </div>


                {/* Bottom */}

                <div className="achievement-card-bottom">

                  <span>
                    ACHIEVEMENT
                  </span>

                  <div className="achievement-card-arrow">
                    <ArrowUpRight size={15} />
                  </div>

                </div>


                <div className="achievement-line" />

              </motion.article>
            );

          })}

        </motion.div>


        {/* =====================================
            STATS
        ====================================== */}

        <motion.div
          className="achievement-stats"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="achievement-stat">

            <strong>
              350+
            </strong>

            <span>
              DSA Problems
            </span>

          </div>


          <div className="achievement-stat">

            <strong>
              160
            </strong>

            <span>
              Days Challenge
            </span>

          </div>


          <div className="achievement-stat">

            <strong>
              8+
            </strong>

            <span>
              Learning Credentials
            </span>

          </div>


          <div className="achievement-stat">

            <strong>
              AI
            </strong>

            <span>
              Agentic AI
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Achievements;