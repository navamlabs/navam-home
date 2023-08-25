import React from "react";
import ExpertiseComponent from "../components/ExpertiseComponent";

const expertiseData = [
    {
        title: 'API Design and Development',
        items: ['Microservices', 'High Performance', 'Cloud Native']
    },
    {
        title: 'Frontend Development',
        items: ['Modern UI/UX', 'Modern Frameworks', 'Responsive Design']
    },
    {
        title: 'Machine Learning',
        items: ['Data Engineering', 'Data Science', 'Data Pipelines']
    },
    {
        title: 'Cloud Development',
        items: ['AWS', 'GCP', 'Kubernetes']
    }
];
const ExpertiseSection = () => {
    return <section className="help-section">
        {expertiseData.map((expertise, index) => <ExpertiseComponent
            key={index}
            index={index + 1}
            title={expertise.title}
            items={expertise.items}
        />)}
    </section>
}

export default ExpertiseSection;