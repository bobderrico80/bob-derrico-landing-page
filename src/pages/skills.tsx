import React from 'react';
import Layout from '../components/layout';
import data from '../content/skills.json';
import './skills.css';

const SkillsPage = () => {
  return (
    <Layout title="Skills" currentSlug="skills">
      <div className="skills">
        <h2 className="skills__title">Skills</h2>

        <div className="skills__container">
          {data.map((skillCategory) => {
            return (
              <section
                className="skills__category"
                key={skillCategory.category}
              >
                <h3 className="skills__category-title">
                  {skillCategory.category}
                </h3>

                <ul className="skills__list">
                  {skillCategory.skills.map((skill) => {
                    return (
                      <li className="skills__skill" key={skill.name}>
                        <div className="skills__icon">
                          {skill.icon ? (
                            <svg aria-hidden="true">
                              <use xlinkHref={`#${skill.icon}`}></use>
                            </svg>
                          ) : (
                            <span
                              aria-hidden="true"
                              className="skills__generic-icon"
                            >
                              {skill.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div className="skills__name">{skill.name}</div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
