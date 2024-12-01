import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QeuServicesService {

  questions : {
    [key: string]: {
      id : number,
      questions: string;
      click: string;
      answer: string;
    } []
  } = {
      ar: [
        {
          "id": 1,
          "questions": "ما هو Angular؟",
          "click": "الاجابة",
          "answer": "Angular هو إطار عمل مفتوح المصدر مقدم من شركة Google يُستخدم لتطوير تطبيقات الويب. يعتمد على لغة TypeScript ويوفر أدوات لإنشاء تطبيقات ويب تفاعلية وسريعة باستخدام مبدأ MVC (Model-View-Controller)."
        },
        {
          "id": 2,
          "questions": "ما هي العناصر الأساسية التي يعتمد عليها Angular؟",
          "click": "الاجابة",
          "answer": "العناصر الأساسية التي يعتمد عليها Angular هي: الوحدات (Modules): حاويات تُستخدم لتجميع المكونات (Components)، والتوجيهات (Directives)، والأنابيب (Pipes)، والخدمات (Services) ذات الصلة. المكونات (Components): هي الوحدة الأساسية لواجهة المستخدم (UI)، ويتم تعريفها باستخدام فئات TypeScript وقوالب HTML. القوالب (Templates): تُستخدم لتحديد واجهة المكون باستخدام HTML وترميز القوالب الخاص بـ Angular. التوجيهات (Directives): تُستخدم لتمديد سلوك عناصر HTML، مثل *ngIf و *ngFor. الخدمات (Services): تُستخدم لمشاركة البيانات أو المنطق بين المكونات المختلفة. حقن الاعتماديات (Dependency Injection - DI): هو نمط تصميم يُستخدم لحقن الخدمات داخل المكونات."
        },
        {
          "id": 3,
          "questions": "ما هي Angular lifecycle hooks؟",
          "click": "الاجابة",
          "answer": "Angular lifecycle hooks هي طرق (methods) تسمح لك بالتفاعل في نقاط محددة خلال حياة المكون (component). فيما يلي أمثلة على بعض هذه الوظائف: ngOnInit: يُستدعى بعد تهيئة المكون. ngOnChanges: يُستدعى عندما تتغير الخصائص المدخلة (input properties). ngOnDestroy: يُستدعى قبل تدمير المكون مباشرة."
        },
        {
          "id": 4,
          "questions": "ما هو هدف NgModule؟",
          "click": "الاجابة",
          "answer": "NgModule هو ديكوراتور يُستخدم لتعريف وحدة (Module) في Angular. يُنظم المكونات (Components)، والتوجيهات (Directives)، والأنابيب (Pipes)، والخدمات (Services) في كتل متماسكة من الوظائف."
        },
        {
          "id": 5,
          "questions": "ما هو النموذج التفاعلي (Reactive Form) في Angular؟",
          "click": "الاجابة",
          "answer": "النماذج التفاعلية (Reactive Forms) تستخدم نهجًا معتمدًا على النموذج لإدارة إدخالات النموذج. توفر تحكمًا أكبر في التحقق من صحة النموذج وحالته."
        }
      ],
      en: [
        {
          "id": 1,
          "questions": "What is Angular?",
          "click": "answer",
          "answer": "Angular is a TypeScript-based open-source web application framework developed by Google. It is used to build dynamic, single-page web applications (SPAs) by combining declarative templates, dependency injection, and powerful tools for building user interfaces."
        },
        {
          "id": 2,
          "questions": "What are the main building blocks of Angular?",
          "click": "answer",
          "answer": "The main building blocks of Angular are: Modules: Containers for related components, directives, pipes, and services. Components: The basic building block of the UI, defined using TypeScript classes and HTML templates. Templates: Define the view of a component using HTML and Angular's template syntax. Directives: Extend the behavior of HTML elements (e.g., *ngIf, *ngFor). Services: Used to share data or logic across components. Dependency Injection (DI): A design pattern used to inject services into components."
        },
        {
          "id": 3,
          "questions": "What are Angular lifecycle hooks?",
          "click": "answer",
          "answer": "Angular lifecycle hooks are methods that allow you to act at specific points during a component's life. Examples include: ngOnInit: Called after the component is initialized. ngOnChanges: Called when input properties change. ngOnDestroy: Called just before the component is destroyed."
        },
        {
          "id": 4,
          "questions": " What is the purpose of NgModule?",
          "click": "answer",
          "answer": "NgModule is a decorator that defines a module in Angular. It organizes components, directives, pipes, and services into cohesive blocks of functionality."
        },
        {
          "id": 5,
          "questions": "What is a reactive form in Angular?",
          "click": "answer",
          "answer": "Reactive forms use a model-driven approach to manage form inputs. They provide more control over form validation and state."
        }
      ]
    }

  getQuestions(lang: string) {
    return this.questions[lang]
  }

}
