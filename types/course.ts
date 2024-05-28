export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

type NewType = Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'>;
export interface CourseWithPath extends NewType {
  rating: string;
  reviewsCount: string;
  studentCount: string;
  reviewsUrl: string;
  path: string;
}

// export interface CourseWithPath {
//   title: string;
//   subtitle: string;
//   courseSlug: string;
//   content: string;
//   thumbnail: string;
//   video: string;
//   rating: string;
//   reviewsCount: string;
//   studentCount: string;
//   reviewsUrl: string;
//   inflearnUrl: string;
//   gymcodingUrl: string;
//   path: string;
// }
