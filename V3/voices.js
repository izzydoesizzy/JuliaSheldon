/* ── Ask Auntie Julia · V3 testimonials ─────────────────────────────────
   Full third-person testimonial set, rendered + filtered client-side.
   Categories map to brand dot colours. Requires only vanilla DOM; GSAP
   (if present) adds the stagger — without it, cards simply appear. */

(function () {
  "use strict";

  var CATS = [
    { key: "Teens & Youth", dot: "#4fb3c9" },
    { key: "Adults & 1:1", dot: "#8f6df0" },
    { key: "Educators & Colleagues", dot: "#2f8499" },
    { key: "Parents & Families", dot: "#b9a3f5" },
    { key: "Camps & Community", dot: "#6fa7b8" },
    { key: "Organizations", dot: "#5a36c9" },
  ];

  /* q = quote (no surrounding quotation marks), a = author, c = category index */
  var DATA = [
    /* Teens & Youth */
    { q: "Julia doesn’t judge the way most adults do — I know I can tell her anything, and she’ll find a way to make it funny and teach me something.", a: "Teen Client", c: 0 },
    { q: "The energy Julia brings to each conversation is her biggest flex.", a: "Teen Client", c: 0 },
    { q: "Julia is so cool! This was fun!", a: "Teen Workshop Participant", c: 0 },
    { q: "Julia is my favourite aunt. Can she adopt me?", a: "Teen Camper", c: 0 },
    { q: "I’m so grateful Julia checked with me first about what to share with my parents.", a: "Teen Client", c: 0 },
    { q: "Julia was my comfort person for the whole day at camp.", a: "Rainbow Leadership Camper", c: 0 },
    { q: "Julia is an awesome role model.", a: "Rainbow Leadership Camper", c: 0 },

    /* Adults & 1:1 */
    { q: "I wasn’t sure a one-off session would be worth it. Julia is worth every penny!", a: "Adult Client", c: 1 },
    { q: "Working with Julia is like having my hilarious friend give me relationship advice and then hold me accountable with actual tools.", a: "Adult Client", c: 1 },
    { q: "Julia gives off good vibes, and I knew right away it would be fun to work with her.", a: "Adult Client", c: 1 },
    { q: "I’m always surprised by how quickly time passes when we’re together. I love how Julia explains things!", a: "Adult Client", c: 1 },
    { q: "I really like that we figure things out together — Julia is also learning and working on stuff.", a: "Adult Client", c: 1 },
    { q: "I’m talking to all of my friends about boundaries now. It’s SO much easier than I thought!", a: "Adult Client", c: 1 },
    { q: "Julia gave me a reframe I really needed to hear.", a: "Adult Client", c: 1 },
    { q: "It took me a long time to reach out, but Julia put me at ease right away.", a: "Adult Client", c: 1 },
    { q: "Julia helped me understand my emotions and how I can do things differently in my relationship.", a: "Adult Client", c: 1 },
    { q: "Julia gave me extra time exactly when I needed it most.", a: "Adult Client", c: 1 },
    { q: "There is NO way I’d have this amazing relationship without everything Julia has done for me.", a: "A Very Happy Client", c: 1 },
    { q: "Julia told me to move at my own pace and be firm holding my boundaries — and it worked!", a: "Happy Client", c: 1 },
    { q: "This has been the best sex-ed-type course I’ve been in. It could be so awkward, but Julia gives off such a fun and nice energy.", a: "“Real Talk” Attendee", c: 1 },

    /* Educators & Colleagues */
    { q: "Julia is everything one can hope for in a spice educator: warm, engaging, patient, approachable, humorous, knowledgeable, inquisitive, and non-judgmental.", a: "Disability Advocate & Educator", c: 2 },
    { q: "From the moment she started, Julia created a safe and welcoming environment that made even the most uncomfortable topics approachable.", a: "High School Teacher", c: 2 },
    { q: "Auntie Julia is as energizing and approachable as she is knowledgeable.", a: "Colleague", c: 2 },
    { q: "If only I’d had Julia when I was a teen; these kids are SO lucky.", a: "Colleague", c: 2 },
    { q: "The amount of preparedness Julia brings and her high work ethic make her very trustworthy — I’ll always recommend anyone to work with her.", a: "Non-profit Assistant Director", c: 2 },
    { q: "Julia was always ready and creative preparing workshops. She’s an amazing solo and team worker, with leadership qualities people naturally gravitate to, and she brought enthusiasm and high energy every single time.", a: "UGDSB Teacher", c: 2 },
    { q: "I highly recommend Julia for any educational setting looking to provide comprehensive, engaging spicy health education. She truly made a difference for my students.", a: "High School Teacher", c: 2 },
    { q: "Julia knows how to use levity to balance the seriousness of many sexual-health topics.", a: "Disability Advocate", c: 2 },
    { q: "The way Julia moves through the world and the positive impact she has on others is immeasurably valuable.", a: "Colleague", c: 2 },
    { q: "I really value Julia’s feedback.", a: "Sex-Positive Colleague", c: 2 },
    { q: "Julia is the perfect person to be working with teens!", a: "Sex-Positive Colleague", c: 2 },
    { q: "Julia created the space and encouraged me to take the time to feel my feelings.", a: "Colleague", c: 2 },
    { q: "I just want to spend more time basking in Julia’s presence.", a: "Workshop Facilitator", c: 2 },

    /* Parents & Families */
    { q: "I trust Julia with my teen because of her honesty, humour, and authenticity.", a: "Sex-Positive Colleague & Parent", c: 3 },
    { q: "It’s quite a miracle, where she is now versus only a few weeks ago. I’m very grateful to Julia for her work in this field.", a: "Parent of a Client", c: 3 },
    { q: "Julia gives kids a safe place to learn and explore without fear of judgment. It’s amazing — and something I wish I’d had growing up.", a: "Mom & Camp Friend", c: 3 },

    /* Camps & Community */
    { q: "I love that Julia has this vision and is making things happen!", a: "Connection Camp Staff", c: 4 },
    { q: "Julia brings sunshine, even when she’s struggling herself.", a: "Camp Staff", c: 4 },
    { q: "Julia’s energy is truly infectious, and she’s so much fun to be around.", a: "Camp Staff", c: 4 },
    { q: "Julia’s ability to cat-wrangle with a smile and logistical success is incredible.", a: "Camp Volunteer", c: 4 },
    { q: "Julia made every space she was in a safe one.", a: "Camper", c: 4 },
    { q: "Julia is so good at being present and authentic.", a: "SGSC Camper", c: 4 },
    { q: "Julia is such a delight of good energy!", a: "SGSC Camper", c: 4 },
    { q: "I really saw the strength of Julia’s leadership today.", a: "Connection Camp ’24 Staff", c: 4 },
    { q: "Julia is SUCH an entertainer — she’s meant to be on camera!", a: "Entrepreneur Retreat Participant", c: 4 },
    { q: "Julia’s expressiveness is such a beautiful art form. I’m so happy she shares it so often and so naturally.", a: "Colleague", c: 4 },
    { q: "I learn so much from Julia’s posts. They start cool conversations.", a: "Follower", c: 4 },

    /* Organizations */
    { q: "Julia delivered a virtual series titled “Real Talk” for our Youth Mental Health Initiative, educating participants on sexual and relational health. She was candid, relatable, and incredibly engaging — accessible and inclusive — and truly met participants at their level. I would highly recommend her services!", a: "Centre Connexions", c: 5 },
    { q: "Auntie Julia was candid, relatable, and incredibly engaging, delivering these workshops in a way that was inclusive and accessible.", a: "Non-Profit Staff", c: 5 },
    { q: "It’s a treat to collaborate with Julia, especially in community-building and youth-support settings where she truly shines.", a: "Community Partner", c: 5 },
    { q: "Wow, they were engaged the whole time — and this time was way more entertaining.", a: "Staff at a Teen Presentation", c: 5 },
    { q: "I had to stop the work I was doing to listen, because Julia’s presentation was so interesting.", a: "Staff at a Teen Talk", c: 5 },
    { q: "Julia is a safe space in a person. I know I never have to filter with her!", a: "Stag Shop Manager", c: 5 },
  ];

  var chipsEl = document.getElementById("chips");
  var gridEl = document.getElementById("vgrid");
  if (!chipsEl || !gridEl) return;

  var ring = document.getElementById("cursorRing");
  function bindHover(scope) {
    if (!ring) return;
    scope.querySelectorAll("[data-hover]").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("is-hover"); });
    });
  }

  var active = "All";

  function render() {
    var items = active === "All"
      ? DATA
      : DATA.filter(function (t) { return CATS[t.c].key === active; });

    gridEl.innerHTML = items
      .map(function (t) {
        var cat = CATS[t.c];
        return (
          '<blockquote class="voice" data-hover>' +
          "<p>“" + t.q + "”</p>" +
          '<div class="voice__meta">' +
          "<cite>— " + t.a + "</cite>" +
          '<span class="voice__tag"><i style="background:' + cat.dot + '"></i>' + cat.key + "</span>" +
          "</div></blockquote>"
        );
      })
      .join("");

    bindHover(gridEl);

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof window.gsap !== "undefined" && !reduce) {
      gsap.from(gridEl.querySelectorAll(".voice"), {
        y: 34,
        opacity: 0,
        duration: 0.6,
        stagger: 0.035,
        ease: "expo.out",
        clearProps: "transform,opacity",
      });
    }
    if (typeof window.ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }

  function renderChips() {
    var defs = [{ key: "All", count: DATA.length }].concat(
      CATS.map(function (cat, i) {
        return { key: cat.key, count: DATA.filter(function (t) { return t.c === i; }).length };
      })
    );
    chipsEl.innerHTML = defs
      .map(function (d) {
        return (
          '<button class="chip' + (d.key === active ? " is-active" : "") + '" data-cat="' + d.key + '" data-hover>' +
          d.key + ' <span class="count">' + d.count + "</span></button>"
        );
      })
      .join("");
    bindHover(chipsEl);
    chipsEl.querySelectorAll(".chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        active = btn.dataset.cat;
        renderChips();
        render();
      });
    });
  }

  renderChips();
  render();
})();
