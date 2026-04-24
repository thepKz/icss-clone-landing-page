 "use client";

import { motion, useReducedMotion } from "framer-motion";

export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

export default function TeamSection({
  members,
  className = "",
}: {
  members: TeamMember[];
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className={className}>
      <div className="border-t border-zinc-200/90 py-10 md:py-12 dark:border-white/10" />
      <div className="grid grid-cols-1 gap-12 pb-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-12">
        {members.map((member, index) => {
          const tile = (
            <div key={member.name + member.role + index} className="text-center">
              <div className="group mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-teal-800/18 bg-linear-to-b from-teal-50/80 via-white to-zinc-50 p-1 text-zinc-950 shadow-[0_14px_34px_-24px_rgba(15,118,110,0.35)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] hover:border-teal-700/35 hover:shadow-[0_18px_44px_-22px_rgba(15,118,110,0.42)] dark:border-cyan-400/20 dark:bg-linear-to-b dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950 dark:text-zinc-50 dark:shadow-[0_16px_38px_-24px_rgba(34,211,238,0.28)] dark:hover:border-cyan-400/35 dark:hover:shadow-[0_22px_48px_-24px_rgba(34,211,238,0.32)] sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                <img
                  className="aspect-square h-full w-full rounded-[calc(1.5rem-4px)] object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                  src={member.avatar}
                  alt={member.name}
                  height={288}
                  width={288}
                  loading="lazy"
                />
              </div>
              <span className="mt-5 block text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {member.name}
              </span>
              <span className="mt-2 inline-flex rounded-full border border-teal-800/25 bg-teal-800/8 px-3 py-1 text-sm font-semibold text-teal-900 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
                {member.role}
              </span>
            </div>
          );

          if (reduce) return tile;

          return (
            <motion.div
              key={member.name + member.role + index + "-motion"}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.35 }}
              transition={{
                duration: 0.65,
                ease: [0.32, 0.72, 0, 1],
                delay: index * 0.05,
              }}
            >
              {tile}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

