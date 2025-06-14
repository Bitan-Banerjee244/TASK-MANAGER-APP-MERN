import React from 'react'

function NoTaskBanner() {
  return (
    <>
     <div className="col-span-full flex flex-col items-center justify-center p-8 rounded-xl border border-gray-700 bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#0e0e0e] shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="text-5xl mb-3 animate-bounce">📭</div>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      No Tasks Found
                    </h3>
                    <p className="text-gray-400 text-sm text-center max-w-md">
                      You haven’t added any tasks yet. Click on{" "}
                      <span className="text-cyan-400 font-semibold">
                        “Add Task”
                      </span>{" "}
                      to create your first task and start managing your work
                      efficiently!
                    </p>
                  </div>
    </>
  )
}

export default NoTaskBanner