'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PROJECTS_DATA } from '@/utils/constants';
import ProjectDetailsView from '@/components/ProjectDetailsView';

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();

  // 1. Find Project Logic
  const projectId = Number(params.id);
  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  // 2. Handle Not Found
  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
        >
          Go Back
        </button>
      </div>
    );
  }

  // 3. Render the View Component
  return <ProjectDetailsView project={project} />;
};

export default ProjectPage;
