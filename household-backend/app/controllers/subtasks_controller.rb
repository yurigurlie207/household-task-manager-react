class SubtasksController < ApplicationController 
    def index
       subtasks = Subtask.unassigned
       render json: SubtaskSerializer.new(subtasks)
    end
    
    def new
        @subtask = Subtask.new(title: params[:title], task_id: params[:task_id])
        @subtask.save
    end

    def create
        @subtask = Subtask.new(title: params[:title], task_id: params[:task_id])
        @subtask.save
    end


end


