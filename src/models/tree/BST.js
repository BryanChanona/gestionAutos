import Node from "./Node.js";

class BST {
    #root;
    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            return this.#root != null;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.model < node.value.model) { 
            if (node.left == null) {
                node.left = new Node(value);
                return node.left != null;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) { 
                node.right = new Node(value);
                return node.right != null; 
            } else {
                return this.insertNode(node.right, value); 
            }
        }
    }

    search(model) {
        return this.searchNode(this.#root, model);
    }

    searchNode(node, model) { 
        if (node == null || node.value.model == model) { 
            return node;
        } else if (model < node.value.model) {
            return this.searchNode(node.left, model);
        } else {
            return this.searchNode(node.right, model);
        }
    }
    searchMin() {
        return this.searchMinValue(this.#root);
    }
    
    searchMinValue(node) {
        if (node == null) {
            return null; 
        }
        if (node.left == null) {
            return node.value; 
        } else {
            return this.searchMinValue(node.left);
        }
    }
    
    searchMax() {
        return this.searchMaxValue(this.#root);
    }
    
    searchMaxValue(node) {
        if (node == null) {
            return null; 
        }
        if (node.right == null) {
            return node.value;
        } else {
            return this.searchMaxValue(node.right);
        }
    }
    
    inOrder(callback) {
        this.inOrderTraverseNode(this.#root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
}


export default BST;