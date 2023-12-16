"use strict";(self["webpackChunkvidhi"]=self["webpackChunkvidhi"]||[]).push([[953],{4196:function(s,e,t){t.r(e),t.d(e,{default:function(){return b}});var i=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"divider divider-error font-bold text-xl"},[s._v("Courses")]),e("div",{staticClass:"join join-vertical gap-3"},s._l(s.Courses,(function(s){return e("CourseComponent",{key:s.id,staticClass:"join-item",attrs:{Course:s}})})),1)])},r=[],o=function(){var s=this,e=s._self._c;return e("div",{staticClass:"card w-96 bg-base-100 shadow-xl",on:{click:s.redirectToCourseDetail}},[e("div",{staticClass:"badge bg-primary badge-xs px-2 py-2"},[s._v(s._s(s.Course.level))]),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[s._v(s._s(s.Course.name))]),e("div",{staticClass:"card-actions justify-end"},[e("div",{staticClass:"badge badge-outline bg-secondary"},[s._v(s._s(s.Course.credits))]),e("div",{staticClass:"badge badge-outline"},[s._v(s._s(s.Course.prerequisites))]),e("div",{staticClass:"badge badge-outline"},[s._v(s._s(s.Course.corequisites))])])])])},a=[],u=(t(560),{props:{Course:{type:Object,required:!0}},methods:{redirectToCourseDetail(){const s=this.Course.id;this.$router.push("/course/"+s)}}}),n=u,d=t(1001),c=(0,d.Z)(n,o,a,!1,null,null,null),l=c.exports,C=t(408),v={name:"CourseListView",components:{CourseComponent:l},computed:{Courses:function(){return this.$store.getters.getCourses}},methods:{...(0,C.nv)(["fetchCourses"])},created:function(){this.fetchCourses()}},h=v,p=(0,d.Z)(h,i,r,!1,null,null,null),b=p.exports}}]);
//# sourceMappingURL=courses.427c65d9.js.map