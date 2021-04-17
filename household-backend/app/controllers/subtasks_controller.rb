class SubtasksController < ApplicationController 
    def index
       subtasks = Subtask.all
       render json: SubtaskSerializer.new(subtasks)
    end
end


