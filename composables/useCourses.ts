import coursesData from './coursesData';
import type { CourseWithPath } from '@/types/course';

interface CourseReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CourseReturn => {
  const courses = coursesData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1), // 5.0
    reviewsCount: item.reviewsCount.toLocaleString(), // 1000 -> 1,000
    studentCount: item.studentCount.toLocaleString(), // 1000 -> 1,000
    path: `/course/${item.courseSlug}`,
  }));
  return {
    courses,
  };
};
