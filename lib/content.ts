import {
  achievements,
  galleryPhotos,
  jobs,
  posts,
  profile,
  projects,
} from "@/app/data/content";
import type {
  AchievementType,
  GalleryPhotoType,
  JobType,
  PostType,
  ProfileType,
  ProjectType,
} from "@/types";

export function getProfile(): ProfileType {
  return profile;
}

export function getJobs(): JobType[] {
  return jobs;
}

export function getProjects(): ProjectType[] {
  return projects;
}

export function getProject(slug: string): ProjectType | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getPosts(): PostType[] {
  return posts;
}

export function getPost(slug: string): PostType | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): PostType[] {
  return posts.filter((post) => post.featured && post.isPublished);
}

export function getAchievements(): AchievementType[] {
  return achievements;
}

export function getGalleryPhotos(): GalleryPhotoType[] {
  return galleryPhotos;
}

